import ReactnativePaperPlugin from '../../src';
import VectorIconPlugin from '@bluebase/plugin-vector-icons/dist/MaterialIcons/index';
import commonBootOptions from '../common/bluebase';
import deepmerge from 'deepmerge';

import { BootOptions } from '@bluebase/core';

/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {

	plugins: [ReactnativePaperPlugin, VectorIconPlugin],
};

export default deepmerge(commonBootOptions, bootOptions);
