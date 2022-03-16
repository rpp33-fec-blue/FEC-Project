import $ from 'jquery';

class Scroll {
  constructor() {
    this.list;
    this.fadeLeft;
    this.fadeRight;
  }

  scrollRight() {
    var count = 0;
    this.fadeLeft.removeClass('card-no-arrow');
    if (this.list.offsetWidth + this.list.scrollLeft < this.list.scrollWidth) {
      var scroll = setInterval(() => {
        if (count < 220 && (this.list.offsetWidth + this.list.scrollLeft) < this.list.scrollWidth) {
          this.list.scrollLeft += 2
          count += 2;
        } else {
          this.fadeLeft.show(0);
          if (this.list.offsetWidth + this.list.scrollLeft >= this.list.scrollWidth) {
            this.fadeRight.hide(0);
          }

          clearInterval(scroll);
        }
      }, 1)
    } else {
      this.fadeLeft.show(0);
      this.fadeRight.hide(0);
    }
  }

  scrollLeft() {
    var count = 0;
    if (this.list.scrollLeft > 0) {
      var scroll = setInterval(() => {
        if (count < 220 && this.list.scrollLeft > 0) {
          this.list.scrollLeft -= 2
          count += 2;
        } else {
          this.fadeRight.show(0);
          if (this.list.scrollLeft === 0) {
            this.fadeLeft.hide(0);
          }
          clearInterval(scroll);
        }
      }, 1)
    } else {
      this.fadeLeft.hide(0);
      this.fadeRight.show(0);
    }
  }
}

class ScrollProductList extends Scroll {
  constructor() {
    super();
    this.list = document.getElementById('related-product-list');
    this.fadeLeft = $('.card-fade-left');
    this.fadeRight = $('.card-fade-right');
  }
}

class ScrollOutfitList extends Scroll {
  constructor() {
    super();
    this.list = document.getElementById('outfit-product-list');
    this.fadeLeft = $('.card-fade-left-outfit');
    this.fadeRight = $('.card-fade-right-outfit');
  }
}

export default {ScrollProductList, ScrollOutfitList};