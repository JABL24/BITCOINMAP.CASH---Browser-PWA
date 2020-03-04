var tagText = [
    'Spicy 🌶️',
    'Salty 🥨',
    'Sour 😜',
    'Organic 🐵',
    'Vegetarian 🥕',
    'Vegan 🐮',
    'Healthy 💓',
    'Burger 🍔',
    'Sandwich 🥪',
    'Muffin 🧁', //The muffin icon is invisible
    'Brownie 🥮', //Brownie is invisible too
    'Cake 🎂',
    'Cookie 🍪',
    'Arabic 🥙',
    'Pizza 🍕',
    'Salad 🥗',
    'Smoothie 🥤',
    'Fruit 🍓',
    'IceCream 🍦',
    'Raw 🥦',
    'Handbag 👜',
    'Cosmetic 💅',
    'Tattoo ♣',
    'Piercing 🌀',
    'Souvenir 🎁',
    'Hatha 🧘',
    'Vinyasa 🧘',
    'Massage 💆',
    'Upcycled 🌲',
    'Coffee ☕',
    'NoGluten 🌽',
    'Cocktails 🍹',
    'Beer 🍺',
    'Music 🎵',
    'Chinese 🍜',
    'Duck 🍱',
    'Rock 🎸',
    'LiveDJ 🎧',
    'Terrace ☀️',
    'Seeds 🌱',
    'Grinder 🍌',
    'Papers 🚬',
    'Advice 🌴',
    'Calzone 🥟',
    'Falafel 🥙',
    'MakeUp 🤡',
    'Gifts 🎁',
    'Tapas 🍠',
    'Copas 🍹',
    'Piadina 🌮',
    'Cheese 🧀',
    'Grains 🌾',
    'Fashion 👗',
    'Fair 🤗',
    'Women 👩',
    'Drinks 🍹',
    'TV 📺',
    'Retro 🦄',
    'Feta 🐐',
    'DASH ₿',
    'BTC ₿',
    'BCH ₿',
    'ANYPAY ₿️',
    'ETH ₿',
    'HotDog 🌭',
    'Fast ⏩',
    'Kosher 🦄',
    'Sushi 🍣',
    'Moto 🛵',
    'Coche 🚘',
    'GOCRYPTO ₿',
    'Chicken 🐔',
    'Rabbit 🐰',
    'Potato 🥔',
    'Kumpir 🥔',
    'Kebap 🐄',
    'ATM 🏦',
    'Gyros 🐖',
    'Coconut 🥥',
    'ToGo 📦',
    'Meditation 🧘',
    'Wine 🍷',
    'Champagne 🥂',
    'Alcohol 🍾',
    'Booze 🥃',
    'Pancakes 🥞', //You cant remove because we use fixed indexes, but replace with another string that is unlikely to be typed in by the user
    'Croissant 🥐',
    'Popcorn 🍿',
    'SoftIce 🍦',
    'Dango 🍡',
    'BnB 🛏️',
    'Haircut ✂️',
    'Candy 🍭',
    'Beauty 💅',
    'Miso 🍱',
    'Chocolate 🍫',
    'Rice 🍚',
    'Seafood 🦀',
    'Hostel 🛏️',
    'Fries 🍟',
    'Fish 🐟', //100
    'Chips 🍟',
    'Italian 🇮🇹',
    'Whiskey 🥃',
    ' - - - ', //This is number 104 the no tag indicator, currently not used //TODO hide this field from the suggestions
    'Bourbon 🥃', //105
    'Liquor 🥃',
    'Men ♂️',
    'Pasta 🍝',
    'Dessert 🍬', //109
    'Starter 🥠', //110
    'BBQ 🍗',
    'Noodle 🍜',
    'Korean 🥟',
    'Market 🧺', //invisible item
    'Bread 🥖',
    'Bakery 🥨',
    'Cafe ☕',
    'Games 🎮',
    'Snacks 🍿',
    'Elegant 🕴️',
    'Piano 🎹',
    'Brunch 🍱',
    'Nachos 🌽',
    'Lunch 🥡',
    'Breakfast 🥐',
    'HappyHour 🥳', //hidden item
    'LateNight 🌜',
    'Mexican 🇲🇽',
    'Burrito 🌯',
    'Tortilla 🌮',
    'Indonesian 🇮🇩',
    'Sports 🏆',
    'Pastry 🥧',
    'Bistro 🍲',
    'Soup 🥣',
    'Tea 🍵',
    'Onion',
    'Steak 🥩',
    'Shakes 🥤',
    'Empanadas 🥟',
    'Dinner 🍽️',
    'Sweet 🍭',
    'Fried 🍳',
    'Omelette 🥚',
    'Gin 🍸',
    'Donut 🍩',
    'Delivery 🚚',
    'Cups ☕',
    'Filter',
    'Juice 🍊',
    'Vietnamese 🇻🇳',
    'Pie 🥮', //invisible item
    'Unagi 🐡',
    'Greek 🇬🇷',
    'Japanese 🇯🇵',
    'Tacos 🌮',
    'Kombucha 🍵',
    'Indian 🇮🇳',
    'Nan 🥪',
    'Club 🎶',
    'Honey 🍯',
    'Pool 🎱',
    'Hotel 🏨',
    'Pork 🥓',
    'Ribs 🍖',
    'Kava 🍵',
    'Chai 🍵',
    'Izzy 🍵',
    'Matcha 🍵',
    'Oden 🍢',
    'Latte ☕',
    'DashText ₿',
    'CoinTigo ₿',
    'CoinText ₿',
    'Salamantex ₿',
    'CryptoBuyer ₿',
    'XPay ₿'
];

function loadIcons() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                var all_places = JSON.parse(xmlhttp.responseText);
                for (var i = 0; i < all_places.length; i++) {
                    var place = all_places[i];
                    place.position = new google
                        .maps
                        .LatLng(place.x, place.y);

                    if (place.t == 0)
                        place.type = 'restaurant';
                    else if (place.t == 1)
                        place.type = 'food';
                    else if (place.t == 2)
                        place.type = 'bar';
                    else if (place.t == 3)
                        place.type = 'super';
                    else if (place.t == 4)
                        place.type = 'shop';
                    else if (place.t == 5)
                        place.type = 'hotel';
                    else if (place.t == 99)
                        place.type = 'atm';
                    else if (place.t == 999)
                        place.type = 'spa';
                    else if (place.t == 9999)
                        place.type = 'tattoo';
                }
                initMap(all_places);
            } else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            } else {
                alert('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("GET", "A1_places8.json", true);
    xmlhttp.send();
}

function isBrowserMobile() {
    var check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

function animateMapZoomTo(map, targetZoom) {
    var currentZoom = arguments[2] || map.getZoom();
    if (currentZoom != targetZoom) {
        google.maps.event.addListenerOnce(map, 'zoom_changed', function(event) {
            animateMapZoomTo(map, targetZoom, currentZoom + (targetZoom > currentZoom ? 1 : -1));
        });
        setTimeout(function() {
            map.setZoom(currentZoom)
        }, 80);
    }
}

function showCurrentLocation(position) {
    var latLng = new google
        .maps
        .LatLng(position.coords.latitude, position.coords.longitude);

    var ownPositionMarker = new google
        .maps
        .Marker({
            position: latLng,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            zIndex: 1
        });

    map.panTo(latLng);
    animateMapZoomTo(map, 10);
}

function initMap(allPlaces) {
    map = new google
        .maps
        .Map(document.getElementById('map'), {
            zoom: 3,
            center: new google
                .maps
                .LatLng(41.4027984, 2.1600427),
            zoomControl: isBrowserMobile() ? false : true,
            streetViewControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
        });

    var allmarker = [];

    var iconBase = 'img/map/';
    var smallestWindowSize = $(window).width() <= $(window).height() ? $(window).width() : $(window).height();

    if (isBrowserMobile()) {
        if (smallestWindowSize < 320)
            iconBase += 'drawable-mdpi/';
        else if (smallestWindowSize < 480)
            iconBase += 'drawable-hdpi/';
        else if (smallestWindowSize < 640)
            iconBase += 'drawable-xhdpi/';
        else if (smallestWindowSize < 992)
            iconBase += 'drawable-xxhdpi/';
        else
            iconBase += 'drawable-xxxhdpi/';
    } else {
        iconBase += 'drawable-mdpi/';
    }

    var icons = {
        'bar': {
            title: 'Cafe-Bar',
            icon: iconBase + 'ic_map_bar.png'
        },
        'atm': {
            title: '@RealBitcoinClub',
            icon: iconBase + 'ic_map_bitcoin.png'
        },
        'food': {
            title: 'Take-Away-Food',
            icon: iconBase + 'ic_map_sweet.png'
        },
        'super': {
            title: 'Supermarket',
            icon: iconBase + 'ic_map_shop.png'
        },
        'spa': {
            title: 'Spa-Wellness',
            icon: iconBase + 'ic_map_spa.png'
        },
        'shop': {
            title: 'Shop',
            icon: iconBase + 'ic_map_basket.png'
        },
        'tattoo': {
            title: 'Tattoo',
            icon: iconBase + 'ic_map_tattoo.png'
        },
        'restaurant': {
            title: 'Restaurant',
            icon: iconBase + 'ic_map_food.png'
        },
        'hotel': {
            title: 'Hotel-Flat',
            icon: iconBase + 'ic_map_hotel.png'
        }
    };

    var delay = 10;


    var indexAnimation = 0;
    allPlaces.forEach(function(currentMerchant) {
        indexAnimation++;

        var marker = new google
            .maps
            .Marker({
                position: currentMerchant.position,
                icon: icons[currentMerchant.type].icon,
                map: map,
                zIndex: 2147483647
            });

        allmarker.push(marker);

        var imageType = 'gif';
        var badgeSize = '564x168';
        var imgWidth = '100%';
        /*if (!supportsWebPImages()){
            imageType = 'gif';
          }*/

        var baseUrl = '';
        var directions = 'https://google.com/maps/search/?api=1&query=' + currentMerchant.x + ',' + currentMerchant.y;
        var gplay = '<a target="_blank" href="https://play.google.com/store/apps/details?id=club.ther' +
            'ealbitcoin.bchmap"><img class="batschLeft" src="' + baseUrl + 'img/google-play-badge' + badgeSize + '.png"></a>'
        var dir = '<a target="_blank" href="' + directions + '"><img class="batschRight" src="' + baseUrl + 'img/google-maps-badge' + badgeSize + '.png"></a>'
        var photo = baseUrl + 'img/app/' + currentMerchant.p;
        var type = icons[currentMerchant.type].title;
        var tags = currentMerchant
            .a
            .split(",");
        var discountLevel = parseInt(currentMerchant.d);

        // var discountText = ["10% discount on first BCH payment","20% discount on
        // first BCH payment","Accepting Bitcoin payments soon","Trade Bitcoin here with
        // 0.0% fee","DASH, BCH, BTC accepted here","Information from
        // discoverdash.com"];

        var contentString = '<span onClick="imatsch();" class="actionbar"><img style="cursor:pointer;" width="10%" alt="&lt;-" src="b' +
            'ack-button.svg" class="backButton"><marquee width="75%" class="titleActionbar" b' +
            'ehavior="scroll" direction="left">' + currentMerchant.n + '</marquee><img style="cursor:pointer;" width="10%" alt="X" src="close-button.svg" class="closeButton"></' +
            'span>';

        var image_url = photo + '.' + imageType;

        contentString += '<div onClick="imatsch();" class="pictureanimation backgroundfallback" width="100%">';
        contentString += '<img class="pictureanimation" width="100%" alt="IMAGE NOT AVAILABLE!" src="' + image_url + '">';
        contentString += '</div>';
        contentString += '<h2 style="margin-top:10px;">' + type + '</h2>';
        contentString += '<h4 class="tags">' + getTagText(tags[0]) + getTagText(tags[1]) + getTagText(tags[2]) + getTagText(tags[3]) + '</h4>';
        contentString += '<span class="batschCon">' + gplay + dir + '</span>';

        marker.addListener('click', function() {
            setTimeout(function() {
                document.getElementById("overlay-content")
                    .innerHTML = contentString;
                $(".overlay").addClass('overlay-open');
            }, delay);
        });
    });

    setTimeout(function() {
        var markerCluster = new MarkerClusterer(map, allmarker, {
            imagePath: '/clusterimage/m'
        });
    }, delay);

    setTimeout(function() {
        if (navigator.geolocation) {
            navigator
                .geolocation
                .getCurrentPosition(showCurrentLocation);
        } else {
            alert("Geolocation not supported. Please use Chrome Browser.");
        }
    }, delay);

    map.setOptions({
        styles: styles['hide']
    });
    infoWindow = new google
        .maps
        .InfoWindow();

}

function getTagText(id) {
    return id !== '104' ? tagText[id] + ' ' : '';
}

function imatsch() {
    $(".overlay").removeClass('overlay-open');
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location
        .search
        .substr(1)
        .split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName)
            result = decodeURIComponent(tmp[1]);
    }
    return result;
}

styles = {
    default: null,
    hide: [{
        "elementType": "geometry",
        "stylers": [{
            "color": "#212121"
        }]
    }, {
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#757575"
        }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#212121"
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
            "color": "#757575"
        }, {
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#9e9e9e"
        }]
    }, {
        "featureType": "administrative.land_parcel",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#bdbdbd"
        }]
    }, {
        "featureType": "poi",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#757575"
        }]
    }, {
        "featureType": "poi.park",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#181818"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#616161"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#1b1b1b"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#2c2c2c"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#8a8a8a"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#373737"
        }]
    }, {
        "featureType": "road.highway",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
            "color": "#3c3c3c"
        }]
    }, {
        "featureType": "road.highway.controlled_access",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
            "color": "#4e4e4e"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#616161"
        }]
    }, {
        "featureType": "transit",
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#757575"
        }]
    }, {
        "featureType": "transit.station.airport",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }]
    }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#3d3d3d"
        }]
    }]
};

function supportsWebPImages() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return false;
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return true;
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        return false;
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return false;
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) { //IF IE > 10
        return
        false;
    } else {
        return
        false;
    }
}