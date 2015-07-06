<?php
/**
 * @var LimeExtra\App $app
 */

// ACL
$this("acl")->addResource('Printdesigner', ['manage.printdesigner']);


$app->on('admin.init', function() use($app) {

    $datastore = $this->module("datastore");
    $printdesigner = $this->module("printdesigner");

    // make sure datastore exists
    if($store = $datastore->printdesigner_get_or_create_datastore($printdesigner->tablename)) {
		$config = $printdesigner->getConfig();
		$printdesigner->site_key = $config['site_key'];
		$printdesigner->secret_key = $config['secret_key'];

		$app->bindClass("Printdesigner\\Controller\\Printdesigner", "printdesigner");

	}

});
$app->on('cockpit.settings.index', function() use($app) {
	echo $this->module("printdesigner")->settingsIndex();
});