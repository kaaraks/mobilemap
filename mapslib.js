$(function() {
        MapsLib.initialize();

        $("#about").click(function() { MapsLib.onExitMap(); });
        $("#search_page").click(function() { MapsLib.onExitMap(); });
        $("#list_button").click(function(){
            MapsLib.onExitMap();
            MapsLib.getListView();
        });

        $("#about_back").click(function() { MapsLib.onEnterMap(); });
        $("#search_back").click(function() { MapsLib.onEnterMap(); });
        $("#list_back").click(function() { MapsLib.onEnterMap(); });

        $("#search").click(function(){
            MapsLib.onEnterMap();
            MapsLib.doSearch();
        });
        $("#search_top").click(function(){
            MapsLib.onEnterMap();
            MapsLib.doSearch();
        });
        $("#search_reset").click(function(){
            MapsLib.resetSearch();
        });
        window.addEventListener('popstate', function(e) { 
            MapsLib.onPopState();
        });
    });