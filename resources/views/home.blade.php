<!DOCTYPE html>
<html>
    <head>
        <title>Forum SPA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>

    <body>
        <div id="app">
            <v-app>
                <v-content>
                    <toolbar/>
                    I'm home.blade.php file
                    <home/>
                </v-content>
            </v-app>
        </div>
        
        <script src="{{ asset('js/app.js') }}" defer></script>   
    </body>
</html>
