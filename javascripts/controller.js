app.controller('myCtrl',  function($scope,$http) {
    $http.get("/2").then(function (thisdata) {
        $scope.name2 =  thisdata.data;

        $scope.score = 345;
        $scope.name = "insert name";

        $scope.show= function () {
            $scope.name2 = thisdata.data;

            //insert new user name and score to the object
            thisdata.data[$scope.name]= $scope.score;

            //This part posts new user data to update JSON file. Not finished.
            var datal = {
                "name_add": $scope.name,
                "score_add":$scope.score
            };
            $http.post("/3", datal);
        };

        $scope.sortu= function () {
            //new object created to store sorted scores (highest to lowest)
            var new_object= {};

            //sort users' names by their scores (highest to lowest)
            var keys = Object.keys(thisdata.data);
            keys.sort(function(a, b) {
                return thisdata.data[b] - thisdata.data[a];

            });


            //sorted key-value pairs are added to new_object
            for(var i=0; i<keys.length ; i++){

                //somehow ng-repeat does not update the result. This is a trick that changes number into string,
                //which makes ng-repeat displays the result. ("99" -> 99)
                if(typeof thisdata.data[keys[i]] === "string" ){
                    new_object[keys[i]] = parseInt(thisdata.data[keys[i]]);
                }

                //somehow ng-repeat does not update the result. This is a trick that changes string into number,
                //which makes ng-repeat displays the result. (99 -> "99")
                if(typeof thisdata.data[keys[i]] === "number" ){
                    new_object[keys[i]] = JSON.stringify(thisdata.data[keys[i]]);
                }

                if(i==keys.length-1){
                    thisdata.data = new_object;
                    $scope.name2 = new_object;
                }
            }
        };

});
});