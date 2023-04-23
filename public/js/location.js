			const userLocation = document.querySelector("[data-location]")
            if (navigator.geolocation) {
				//alert("Allowed");

				navigator.geolocation.watchPosition(successCallback, errorCallback, {});

				function successCallback(currentPosition) {
					// alert(currentPosition.coords.longitude +" " + currentPosition.coords.latitude);
                    userLocation.innerHTML=`${currentPosition.coords.longitude} ${currentPosition.coords.latitude}`
				
				var lat = currentPosition.coords.latitude,
		        long = currentPosition.coords.longitude;
 
		        var mapElem = document.getElementById('map');
				const googleMap = "https://maps.googleapis.com/maps/api/staticmap?center=" +  lat + ',' + long +"&zoom=18&size=400x400&markers=color:red%7Clabel:DoyerSt%7C"+  lat + ',' + long +"&key=AIzaSyCAirwcBgqDzPj6DlLDNzWvF-DPlcjsXfE"
		    	mapElem.innerHTML = `<img src="${googleMap}" />`					
				}

				function errorCallback(e) {
					alert(e);
				}

			} else {
				//alert("Not Allowed");
			}

        function logLocation(){
            console.log("logging location")
        }