import * as monaco from 'monaco-editor';

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'php') {
			return './php.worker.bundle.js';
		}
		return './editor.worker.bundle.js';
	}
}

monaco.editor.create(document.getElementById('container'), {
	value: '',
	language: 'php',
	theme: "vs-dark",
});
