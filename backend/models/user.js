import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Your Name'],
        maxLength:[50, 'Name Cannot Exceed 50 Characters']
    },
    email: {
        type: String,
        required: [true, 'Please Enter Your Email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please Enter Your Password'],
        minLength: [6, 'You Password Must Be Longer Than 6 Characters'],
        select: false
    },
    avatar: {
        public_id: String,
        url: String
    },
    role: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
  }, 
  { timestamps: true } 
);

// Encrypting Password Before Saving the user
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next();
    };

    this.password = await bcrypt.hash(this.password, 10);
})

// Return JWT Token'
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME,
    });
};

// Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Generate password reset token
userSchema.methods.getResetPasswordToken = function () {
    // Gernerate token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hash and set to resetPasswordToken field
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    // Set token expire time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;
  
    return resetToken;
  };  
  

export default mongoose.model('User', userSchema);