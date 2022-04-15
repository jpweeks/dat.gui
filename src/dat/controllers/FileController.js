/**
 * dat-gui JavaScript Controller Library
 * https://github.com/dataarts/dat.gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import Controller from './Controller';
import dom from '../dom/dom';

/**
 * @class Provides a file input.
 *
 * @extends dat.controllers.Controller
 *
 * @param {Object} object The object to be manipulated
 * @param {string} property The name of the property to be manipulated
 */
class FileController extends Controller {
  constructor(object, property, args) {
    super(object, property);

    const _this = this;

    const input = this.__input = document.createElement('input');
    input.type = 'file';

    if (args.accept) {
      input.accept = args.accept;
    }
    if (args.multiple) {
      input.multiple = !!args.multiple;
    }

    dom.bind(input, 'change', function() {
      const files = input.files;
      _this.setValue(files);
    });

    this.domElement.appendChild(this.__input);
  }

  setValue(v) {
    const toReturn = super.setValue(v);

    if (this.__onFinishChange) {
      this.__onFinishChange.call(this, this.getValue());
    }
    return toReturn;
  }
}

export default FileController;
