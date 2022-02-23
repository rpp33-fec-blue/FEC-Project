import PropTypes from 'prop-types';

const statePropTypes = {

  productIdPropType: PropTypes.number,

  productInfoPropTypes: PropTypes.exact({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.exact({
      feature: PropTypes.string,
      value: PropTypes.string
    }))
  }),

  stylesPropTypes: PropTypes.exact({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.exact({
      style_id: PropTypes.number,
      name: PropTypes.string,
      original_price: PropTypes.string,
      sale_price: PropTypes.string,
      'default?': PropTypes.bool,
      photos: PropTypes.arrayOf(PropTypes.exact({
        thumbnail_url: PropTypes.string,
        url: PropTypes.string
      })),
      skus: PropTypes.objectOf(PropTypes.exact({
        quantity: PropTypes.number,
        size: PropTypes.string
      }))
    }))
  }),

  relatedProductsPropTypes: PropTypes.arrayOf(PropTypes.number),

  metadataPropTypes: PropTypes.exact({
    product_id: PropTypes.string,
    ratings: PropTypes.objectOf(PropTypes.string),
    recommended: PropTypes.exact({
      false: PropTypes.string,
      true: PropTypes.string
    }),
    characteristics: PropTypes.objectOf(PropTypes.exact({
      id: PropTypes.number,
      value: PropTypes.string
    }))
  }),

  questionsPropTypes: PropTypes.exact({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.exact({
      question_id: PropTypes.number,
      question_body: PropTypes.string,
      question_date: PropTypes.string,
      asker_name: PropTypes.string,
      question_helpfulness: PropTypes.number,
      reported: PropTypes.bool,
      answers: PropTypes.objectOf(PropTypes.exact({
        id: PropTypes.number,
        body: PropTypes.string,
        date: PropTypes.string,
        answerer_name: PropTypes.string,
        helpfulness: PropTypes.number,
        photos: PropTypes.arrayOf(PropTypes.string)
      }))
    }))
  }),

  cartPropTypes: PropTypes.arrayOf(PropTypes.exact({
    sku_id: PropTypes.number,
    count: PropTypes.number
  })),

  outfitPropTypes: PropTypes.arrayOf(PropTypes.number)
};

export default statePropTypes;