export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.handleItem(this.items[i]);
    }

    return this.items;
  }

  handleItem(item: Item) {
    switch (item.name) {
      case "Aged Brie":
        this.handleAgedBrie(item);
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        this.handleBackstagePass(item);
        break;
      case "Sulfuras, Hand of Ragnaros":
        this.handleSulfuras(item);
        break;
      case "Conjured Mana Cake":
        this.handleConjured(item);
        break;
      default:
        this.handleGeneralItem(item);
        break;
    }
  }

  handleAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }

  handleBackstagePass(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.sellIn < 11) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
      if (item.sellIn < 6) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    }
  }

  handleSulfuras(item: Item) {
    return;
  }

  handleConjured(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 2;
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      if (item.quality > 0) {
        item.quality = item.quality - 2;
      }
    }
  }

  handleGeneralItem(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }

    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      if (item.quality > 0) {
        item.quality = item.quality - 1;
      }
    }
  }
}
