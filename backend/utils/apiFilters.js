class APIFilters{
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword
        ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i",
            },
          }
        : {};

    this.query = this.query.find({...keyword});
    return this;
    }

    filters() {
        const queryCopy = { ...this.queryStr };
        
        // Fields to remove

        const fieldToRemove = ['keyword','page'];
        fieldToRemove.forEach((el)=> delete queryCopy[el]);

        // Advance Filter for price, ratings etc
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match)=> `$${match}`);

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    paginnation(resPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);

        this.query = this.query.limit(resPerPage).skip(skip);
        return this;
    }
};

export default APIFilters;

// eg we have 10 results page and we want got page 2 then 2-1 =1 and 1 * 10 = 10 
// this means we have skipped first 10 results

// $regex = search in the name of product not exactly to the product name with the keyword
// $option = the search is the case insensitive

// search filter
// advance filters for rating and price
// pagination