<?php

namespace Printdesigner\Controller;

class Api extends \Cockpit\Controller {

    public function get($projectID=null) {

		if (!$projectID) {
			return json_encode(['error' => 'No projectID!']);
        }

		$project = $this->module("datastore")->findOne('printdesigner_projects', ["projectID"=>$projectID]);

        if (!$project) {
			return json_encode(['error' => 'Project not found!']);
        }

		//vue don't want no dangling _'s
		$project['extID'] = $project['_id'];
		unset($project['_id']);
		return json_encode(['data' => $project]);
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

    public function export() {

		if (!$this->app->module("printdesigner")->checkToken()) {
			return json_encode(['error' => 'Invalid token!']);
		}

		$project = $this->param('project', false);

		if (!$project['projectID']) {
			return json_encode(['error' => 'No projectID!']);
		}

		$svg = $this->param('svg', '');
		$project['svg_path'] = 'projects/' . $project['projectID'] . '/export.svg';
		if (!is_dir(COCKPIT_DOCS_ROOT . '/projects/' . $project['projectID'])) {
			mkdir(COCKPIT_DOCS_ROOT . '/projects/' . $project['projectID'], 644);
		}
		$fileSize = file_put_contents(COCKPIT_DOCS_ROOT . '/' . $project['svg_path'], $svg);


		//vue don't want no dangling _'s
		$project['_id'] = !empty($project['extID']) ? $project['extID'] : null;

		$ret = $this->module("datastore")->save_entry('printdesigner_projects', $project);

		if (empty($project['_id'])) { //pk only returned on new item
			$project['extID'] = $ret;
		}

		return json_encode([
			'token' => getSessionToken(),
			'data' => $project
		]);
    }

}