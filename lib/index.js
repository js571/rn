#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fse from 'fs-extra';
import path from 'node:path';
import { confirm } from '@inquirer/prompts';
import colors from 'colors';
function cli() {
    return __awaiter(this, void 0, void 0, function* () {
        const confirmRes = yield confirm({ message: colors.red(`执行后将会删除当前目录下的node_modules文件夹, 是否继续?`), default: true });
        if (confirmRes) {
            const dir = path.join(process.cwd(), 'node_modules');
            yield fse.remove(dir);
            console.log(colors.green('删除成功'));
        }
    });
}
cli();
//# sourceMappingURL=index.js.map