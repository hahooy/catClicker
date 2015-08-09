var catsData = [
    {
	clickCount: 0,
	name: "Tabby",
	imgSrc: "img/434164568_fea0ad4013_z.jpg",
	imgAttribution: "http://www.flickr.com/photos",
	nicknames: ["Tabtab", "Kabob", "Jumbo"]	
    },
    {
	clickCount: 0,
	name: "Tiger",
	imgSrc: "img/4154543904_6e2428c421_z.jpg",
	imgAttribution: "http://www.flickr.com/photos",
	nicknames: ["Woooooooo"]	
    },
    {
	clickCount: 0,
	name: "Scaredy",
	imgSrc: "img/22252709_010df3379e_z.jpg",
	imgAttribution: "http://www.flickr.com/photos",
	nicknames: ["Slopy"]	
    },
    {
	clickCount: 0,
	name: "Shadow",
	imgSrc: "img/1413379559_412a540d29_z.jpg",
	imgAttribution: "http://www.flickr.com/photos",
	nicknames: ["Shooby"]	
    },
    {
	clickCount: 0,
	name: "Sleepy",
	imgSrc: "img/9648464288_2516b35537_z.jpg",
	imgAttribution: "http://www.flickr.com/photos",
	nicknames: ["Zzzzz"]	
    }
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

    this.level = ko.computed(function() {
	var clicks = this.clickCount();
	if (clicks < 10) {
	    return "Newborn";
	} else if (clicks < 20) {
	    return "Infant";
	} else if (clicks < 30) {
	    return "Child";
	} else if (clicks < 50) {
	    return "Teen";
	} else {
	    return "Adult";
	}
    }, this);
};

var ViewModel = function() {
    var self = this;
    this.cats = ko.observableArray([]);
    catsData.forEach(function(data) {
	self.cats.push(new Cat(data));	
    });
    this.currentCat = ko.observable(this.cats()[0]);
    this.incrementCounter = function() {
	self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
    this.setCurrentCat = function() {
	self.currentCat(this);
    };
};

ko.applyBindings(new ViewModel());
