$(document).ready(function(){
                $(".rock").click(function(){
                    $.ajax({
                        type: "GET",
                        url: "/rock",
                        dataType: "json"
                    }).done (function (data) {

                        $(".main_container").hide();
                        $(".events_container").empty();
                        $(".events_container").show();
                        
                        var back = "<div class=back>Back</div>";
                        
                        $(".events_container").append(back);
                        
                        for(i=0; i<data.length; i++){
                            
                            var timeAndDate = JSON.stringify(data[i].when);
                            var place = JSON.stringify(data[i].where);
                            var name = JSON.stringify(data[i].name);
                            
                            var when = "<span class=when>When:</span> <span class=text>" + timeAndDate.substring(1, timeAndDate.length - 1) + "</span><br>";
                            var where = "<span class=where>Where:</span> <span class=text>" + place.substring(1, place.length - 1) + "</span><br>";
                            var what = "<span class= what>What:</span> <span class=text>" + name.substring(1, name.length - 1) + "</span><br>";
                            
                            var addToSchdule = "<div class=addToSchdule>Add to Schedule</div>";
                            var moreInfo = "<div class=moreInfo>More Information</div>";
                            var playArtist = "<div class=playArtist>Play Artist</div>";
                            
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".events_container").append(when, where, what, addToSchdule, moreInfo, playArtist);

                            $(".events_container").append("<br>");
                        }
                        
                        if(i == data.length){
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".back").addClass("button");
                        }
                    });
                });
            });


$(document).ready(function(){
                $(".jazz").click(function(){
                    $.ajax({
                        type: "GET",
                        url: "/jazz",
                        dataType: "json"
                    }).done (function (data) {

                        $(".main_container").hide();
                        $(".events_container").empty();
                        $(".events_container").show();
                        
                        var back = "<div class=back>Back</div>";
                        
                        $(".events_container").append(back);
                        
                        for(i=0; i<data.length; i++){
                            
                            var timeAndDate = JSON.stringify(data[i].when);
                            var place = JSON.stringify(data[i].where);
                            var name = JSON.stringify(data[i].name);
                            
                            var when = "<span class=when>When:</span> <span class=text>" + timeAndDate.substring(1, timeAndDate.length - 1) + "</span><br>";
                            var where = "<span class=where>Where:</span> <span class=text>" + place.substring(1, place.length - 1) + "</span><br>";
                            var what = "<span class=text><strong>" + name.substring(1, name.length - 1) + "</strong></span><br>";
                            
                            var addToSchdule = "<div class=addToSchdule>Add to Schedule</div>";
                            var moreInfo = "<div class=moreInfo>More Information</div>";
                            var playArtist = "<div class=playArtist>Play Artist</div>";
                            
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".events_container").append(what, when, where, addToSchdule, moreInfo, playArtist);

                            $(".events_container").append("<br>");
                        }
                        
                        if(i == data.length){
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".back").addClass("button");
                        }
                    });
                });
            });

$(document).ready(function(){
                $(".blues").click(function(){
                    $.ajax({
                        type: "GET",
                        url: "/blues",
                        dataType: "json"
                    }).done (function (data) {

                        $(".main_container").hide();
                        $(".events_container").empty();
                        $(".events_container").show();
                        
                        var back = "<div class=back>Back</div>";
                        
                        $(".events_container").append(back);
                        
                        for(i=0; i<data.length; i++){
                            
                            var timeAndDate = JSON.stringify(data[i].when);
                            var place = JSON.stringify(data[i].where);
                            var name = JSON.stringify(data[i].name);
                            
                            var when = "<span class=when>When:</span> <span class=text>" + timeAndDate.substring(1, timeAndDate.length - 1) + "</span><br>";
                            var where = "<span class=where>Where:</span> <span class=text>" + place.substring(1, place.length - 1) + "</span><br>";
                            var what = "<span class=text>TITLE: " + name.substring(1, name.length - 1) + "</span><br>";
                            
                            var addToSchdule = "<div class=addToSchdule>Add to Schedule</div>";
                            var moreInfo = "<div class=moreInfo>More Information</div>";
                            var playArtist = "<div class=playArtist>Play Artist</div>";
                            
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".events_container").append(what, when, where, addToSchdule, moreInfo, playArtist);

                            $(".events_container").append("<br>");
                        }
                        
                        if(i == data.length){
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".back").addClass("button");
                        }
                    });
                });
            });


$(document).ready(function(){
                $(".food").click(function(){
                    $.ajax({
                        type: "GET",
                        url: "/food",
                        dataType: "json"
                    }).done (function (data) {

                        $(".main_container").hide();
                        $(".events_container").empty();
                        $(".events_container").show();
                        
                        var back = "<div class=back>Back</div>";
                        
                        $(".events_container").append(back);
                        
                        for(i=0; i<data.length; i++){
                            
                            var timeAndDate = JSON.stringify(data[i].when);
                            var place = JSON.stringify(data[i].where);
                            var name = JSON.stringify(data[i].name);
                            
                            var when = "<span class=when>When:</span> <span class=text>" + timeAndDate.substring(1, timeAndDate.length - 1) + "</span><br>";
                            var where = "<span class=where>Where:</span> <span class=text>" + place.substring(1, place.length - 1) + "</span><br>";
                            var what = "<span class= what>What:</span> <span class=text>" + name.substring(1, name.length - 1) + "</span><br>";
                            
                            var addToSchdule = "<div class=addToSchdule>Add to Schedule</div>";
                            var moreInfo = "<div class=moreInfo>More Information</div>";
                            var playArtist = "<div class=playArtist>Play Artist</div>";
                            
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".events_container").append(when, where, what, addToSchdule, moreInfo, playArtist);

                            $(".events_container").append("<br>");
                        }
                        
                        if(i == data.length){
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".back").addClass("button");
                        }
                    });
                });
            });


$(document).ready(function(){
                $(".art_festivities").click(function(){
                    $.ajax({
                        type: "GET",
                        url: "/art_festivities",
                        dataType: "json"
                    }).done (function (data) {

                        $(".main_container").hide();
                        $(".events_container").empty();
                        $(".events_container").show();
                        
                        var back = "<div class=back>Back</div>";
                        
                        $(".events_container").append(back);
                        
                        for(i=0; i<data.length; i++){
                            
                            var timeAndDate = JSON.stringify(data[i].when);
                            var place = JSON.stringify(data[i].where);
                            var name = JSON.stringify(data[i].name);
                            
                            var when = "<span class=when>When:</span> <span class=text>" + timeAndDate.substring(1, timeAndDate.length - 1) + "</span><br>";
                            var where = "<span class=where>Where:</span> <span class=text>" + place.substring(1, place.length - 1) + "</span><br>";
                            var what = "<span class= what>What:</span> <span class=text>" + name.substring(1, name.length - 1) + "</span><br>";
                            
                            var addToSchdule = "<div class=addToSchdule>Add to Schedule</div>";
                            var moreInfo = "<div class=moreInfo>More Information</div>";
                            var playArtist = "<div class=playArtist>Play Artist</div>";
                            
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".events_container").append(when, where, what, addToSchdule, moreInfo, playArtist);

                            $(".events_container").append("<br>");
                        }
                        
                        if(i == data.length){
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".back").addClass("button");
                        }
                    });
                });
            });


$(document).ready(function(){
                $(".misc").click(function(){
                    $.ajax({
                        type: "GET",
                        url: "/misc",
                        dataType: "json"
                    }).done (function (data) {

                        $(".main_container").hide();
                        $(".events_container").empty();
                        $(".events_container").show();
                        
                        var back = "<div class=back>Back</div>";
                        
                        $(".events_container").append(back);
                        
                        for(i=0; i<data.length; i++){
                            
                            var timeAndDate = JSON.stringify(data[i].when);
                            var place = JSON.stringify(data[i].where);
                            var name = JSON.stringify(data[i].name);
                            
                            var when = "<span class=when>When:</span> <span class=text>" + timeAndDate.substring(1, timeAndDate.length - 1) + "</span><br>";
                            var where = "<span class=where>Where:</span> <span class=text>" + place.substring(1, place.length - 1) + "</span><br>";
                            var what = "<span class= what>What:</span> <span class=text>" + name.substring(1, name.length - 1) + "</span><br>";
                            
                            var addToSchdule = "<div class=addToSchdule>Add to Schedule</div>";
                            var moreInfo = "<div class=moreInfo>More Information</div>";
                            var playArtist = "<div class=playArtist>Play Artist</div>";
                            
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".events_container").append(when, where, what, addToSchdule, moreInfo, playArtist);

                            $(".events_container").append("<br>");
                        }
                        
                        if(i == data.length){
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".back").addClass("button");
                        }
                    });
                });
            });


$(document).ready(function(){
                $(".all_events").click(function(){
                    $.ajax({
                        type: "GET",
                        url: "/all_events",
                        dataType: "json"
                    }).done (function (data) {
                        
                        $(".main_container").hide();
                        $(".events_container").empty();
                        $(".events_container").show();
                        
                        var back = "<div class=back>Back</div>";
                        
                        $(".events_container").append(back);
                        
                        for(i=0; i<data.length; i++){
                            
                            var timeAndDate = JSON.stringify(data[i].when);
                            var place = JSON.stringify(data[i].where);
                            var name = JSON.stringify(data[i].name);
                            
                            var when = "<span class=when>When:</span> <span class=text>" + timeAndDate.substring(1, timeAndDate.length - 1) + "</span><br>";
                            var where = "<span class=where>Where:</span> <span class=text>" + place.substring(1, place.length - 1) + "</span><br>";
                            var what = "<span class= what>What:</span> <span class=text>" + name.substring(1, name.length - 1) + "</span><br>";
                            
                            var addToSchdule = "<div class=addToSchdule>Add to Schedule</div>";
                            var moreInfo = "<div class=moreInfo>More Information</div>";
                            var playArtist = "<div class=playArtist>Play Artist</div>";
                            
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".events_container").append(when, where, what, addToSchdule, moreInfo, playArtist);
                            
                            $(".events_container").append("<br>");
                        }
                        
                        if(i == data.length){
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".back").addClass("button");
                        }
                    });
                });
            });



$(document).on('click', '.back', function(){  

    $(".main_container").show();
    $(".events_container").hide();
});



$(document).ready(function(){
    $(".search").keyup(function(event){

        if (event.shiftKey) {
            return;
        }
        
        var searchstring = $('#searchfield');
    
        
        if(event.which === 13){
            
            var str = searchstring.val().split("TYPE");
            
            if(typeof str[0] === 'undefined' || typeof str[1] === 'undefined'){
                return;
            }
            
            str[0] = str[0].trim();
            str[1] = str[1].substring(1, str[1].length).trim();
            
            $.ajax({
                type: "GET",
                url: "/search/" + str[0] + "/" + str[1],
                dataType: "json"
            }).done (function (data) {
                
                if (data.length === 0){
                    return;
                }
                
                        $(".main_container").hide();
                        $(".events_container").empty();
                        $(".events_container").show();
                        
                        var back = "<div class=back>Back</div>";
                        
                        $(".events_container").append(back);
                
                        for(i=0; i<data.length; i++){
                            
                            var timeAndDate = JSON.stringify(data[i].when);
                            var place = JSON.stringify(data[i].where);
                            var name = JSON.stringify(data[i].name);
                            
                            var when = "<span class=when>When:</span> <span class=text>" + timeAndDate.substring(1, timeAndDate.length - 1) + "</span><br>";
                            var where = "<span class=where>Where:</span> <span class=text>" + place.substring(1, place.length - 1) + "</span><br>";
                            var what = "<span class= what>What:</span> <span class=text>" + name.substring(1, name.length - 1) + "</span><br>";
                            
                            var addToSchdule = "<div class=addToSchdule>Add to Schedule</div>";
                            var moreInfo = "<div class=moreInfo>More Information</div>";
                            var playArtist = "<div class=playArtist>Play Artist</div>";
                            
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".events_container").append(when, where, what, addToSchdule, moreInfo, playArtist);
//                            $(".events_container").append(JSON.stringify(data[i]));
                            $(".events_container").append("<br>");
                        }
                        
                        if(i == data.length){
                            $(".addToSchdule").addClass("button big_button");
                            $(".moreInfo").addClass("button big_button");
                            $(".playArtist").addClass("button small_button");
                            
                            $(".back").addClass("button");
                        }
                    });
            
        } else {
            
            $.ajax({

                type: "GET",
                url: "/search",
                dataType: "json"
            }).done (function (data) {


                arr = [];

                for(i = 0; i<data.length; i++){

                    var temp = JSON.stringify(data[i].name);
                    temp = temp.substring(1, temp.length - 1);
                    var temp2 = JSON.stringify(data[i].type);
                    temp2 = temp2.substring(1, temp2.length - 1);

                    temp = temp + " TYPE: " + temp2;

                    if(arr.indexOf(temp) == -1){
                        arr.push(temp);
                    }
                }

                $( "#searchfield" ).autocomplete({
                    source: arr
                });
            });
        }
    });
});


//*******************************************************
// This is how you should use POST
//$.ajax({
//        type: "POST",
//        url: hb_base_url + "consumer",
//        contentType: "application/json",
//        dataType: "json",
//        data: JSON.stringify({
//            first_name: $("#namec").val(),
//            last_name: $("#surnamec").val(),
//            email: $("#emailc").val(),
//            mobile: $("#numberc").val(),
//            password: $("#passwordc").val()
//        }),
//        success: function(response) {
//            console.log(response);
//        },
//        error: function(response) {
//            console.log(response);
//        }
//});




