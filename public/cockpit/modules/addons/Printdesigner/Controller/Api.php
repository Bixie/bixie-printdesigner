<?php

namespace Printdesigner\Controller;

class Api extends \Cockpit\Controller {

    public function get($projectID=null) {

		if (!$projectID) {
            return false;
        }

		$project = $this->app->db->findOne('printdesigner_designs', ["projectID"=>$projectID]);
		return json_encode($projectID);

        if (!$project) {
            return false;
        }


        return json_encode($project->toArray());
    }

    public function save($projectID) {

		if (!$this->app->module("printdesigner")->checkToken()) {
			return json_encode(['error' => 'Invalid token!']);
		}

		if (!$projectID) {
			return json_encode(['error' => 'No projectID!']);
		}

		$data = $this->param('data', false);
		if (!$data) {
            return false;
        }
		$data['token'] = getSessionToken();
		return json_encode($data);
    }

}