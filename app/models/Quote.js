
export class Quote {

    constructor(data) {
        this.content = data.content
        this.author = data.author
    }

    get QuoteHTMLTemplate() {
        return `
        <p class="quote-content">${this.content}</p><br>
        <p class="quote-author">${this.author}</p>
        `
    }
}

// const quoteData =
// {
//     "quote": {
//       "body": {
//         "maxLength": 500
//       },
//       "author": {
//         "maxLength": 500
//       },
//       "tags": [
//         {
//           "maxLength": 500
//         }
//       ]
//     },
//     "description": {
//       "type": "String",
//       "required": true
//     }
//   }


