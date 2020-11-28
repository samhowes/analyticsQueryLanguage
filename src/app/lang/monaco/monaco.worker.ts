const ctx: Worker = self as any;

import * as worker from 'monaco-editor-core/esm/vs/editor/editor.worker';
import { TodoLangWorker } from './todoLangWorker';
ctx.onmessage = () => {
  // ignore the first message
  worker.initialize((ctx, createData) => {
    return new TodoLangWorker(ctx);
  });
};
