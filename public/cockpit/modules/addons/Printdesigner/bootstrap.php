<?php
/* *
 *	Bixie Recaptcha
 *  bootstrap.php
 *	Created on 10-5-2015 12:15
 *  
 *  @author Matthijs Alles
 *  @copyright Copyright (C)2015 Bixie.nl
 *  @license MIT
 *
 */

/**
 * @var LimeExtra\App $app
 */


// API

$this->module("printdesigner")->extend([

	'tablename' => 'printdesigner_designs',

	'settingsIndex' => function () use ($app) {
		$config = $this->getConfig();
		return $app->view("printdesigner:views/settings.php", [
			'site_key' => $config['site_key'],
			'secret_key' => $config['secret_key']
		]);
	},

	'getConfig' => function () use ($app) {
		return $app->module("datastore")->findOne($this->tablename, ['key'=>'recaptchaKeys']);
	},

	'saveConfig' => function ($settings) use ($app) {
		$config = $this->getConfig();
		if (isset($config['_id'])) {
			$settings['_id'] = $config['_id'];
		}
		$settings['key'] = 'recaptchaKeys';
		return $app->module("datastore")->save_entry($this->tablename, $settings);
	}
]);

$this->module("datastore")->extend([
	"printdesigner_get_or_create_datastore" => function ($name) use ($app) {

		$datastore = $this->get_datastore($name);

		if (!$datastore) {

			$datastore = [
				"name" => $name,
				"modified" => time()
			];

			$datastore["created"] = $datastore["modified"];

			$app->db->save("common/datastore", $datastore);
		}

		return $datastore;
	}
]);


// ADMIN
if (COCKPIT_ADMIN && !COCKPIT_REST) include_once(__DIR__ . '/admin.php');
