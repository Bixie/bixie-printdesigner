<?php
include 'cockpit/bootstrap.php';
?>
<!DOCTYPE HTML>
<html lang="nl-NL" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bixie PrintDesigner</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="vendor/uikit/css/uikit.almost-flat.min.css" type="text/css" />
    <link rel="stylesheet" href="vendor/uikit/css/components/sortable.almost-flat.min.css" type="text/css" />
</head>

<body>
    <div class="uk-container uk-container-center">
        <header class="uk-block uk-block-primary">
            <h1 class="uk-text-center uk-margin-remove uk-contrast">Bixie PrintDesigner</h1>
        </header>
        <section class="uk-block uk-block-default">
            <div id="main" class="uk-form">
                <component is="{{ currentView }}"></component>
            </div>
        </section>

    </div>
    <script>
        var $bixConfig = {
            token: '<?= getSessionToken(); ?>',
			url: 'cockpit/index.php/api/printdesigner',
			prefix: 'bpd',
			saveStateDebounceTime: 1000,
            canvasOptions: {
                bgColor: '#ffffff',
                width: 600,
                height: 400
            }};
    </script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/fabric.js/1.5.0/fabric.min.js"></script>
    <script type="text/javascript" src="js/bundle.js" charset="utf-8"></script>

    <script type="text/javascript" src="vendor/uikit/js/components/sortable.js"></script>
    <script type="text/javascript" src="vendor/uikit/js/components/lightbox.js"></script>
</body>
</html>
