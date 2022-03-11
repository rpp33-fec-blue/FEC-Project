# FEC-Project

:shopping_cart: Modern E-Commerce website in javascript :shopping_cart:

## Table of Contents
- Main features
- Getting Started
- API references
- Roadmap

## Main features:
**Product Overview** <br />
Product overview feature enables customers to see relevant information for a single product in the catalogue. The functionality contained within this feature can be divided into image gallery, product information, style selector, Add to cart <br />

<img src="https://atelier-answers-photo.s3.ap-southeast-1.amazonaws.com/product-overview.gif" height="500" /><br />

**Related products** <br />
The Related Items & Comparison module displays two sets of related products. The first set is a list of products related to the product currently being viewed. The second set is a list created by the user.

<img src="https://atelier-answers-photo.s3.ap-southeast-1.amazonaws.com/related-products.gif" height="500" /><br />

**Questions & Answers** <br />
The Questions & Answers feature allows asking and answering questions for the product selected. The functionality contained within this module are view questions,
search for a question, asking a question, answering a question <br />

<img src="https://atelier-answers-photo.s3.ap-southeast-1.amazonaws.com/questions-answers.gif" height="400" /><br />

## Getting started
**Clone down the repository**
```
# git clone https://github.com/rpp33-fec-blue/FEC-Project.git
```
**Install dependencies**
```
# npm install
```

**Build webpack and start the server**
```
npm run server-dev
npm run react-dev
```

## API reference
**Connecting to Your shopping cart server**
Here are end points that you need to have:
- GET /products <br />
Responses: <br />
```
#[
  {
        "id": 1,
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140"
    },
```
[Link](See more API end points documents)

**Connecting to s3 storage**
1. Create a new bucket name "atelier-answers-photo"
2. Create a new policy for anyone to be able to putObject into the "atelier-answers-photo" bucket.
3. Create a new user and apply above policy to this new user.
4. Save access key and secret key of this user in ".env" file.

## Roadmap
Here are the features that we will come up in the future:
- Shopping cart / Checkout page
- Search and results pages