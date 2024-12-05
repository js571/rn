#!/usr/bin/env node
import fse from 'fs-extra'
import path from 'node:path'
import { confirm } from '@inquirer/prompts';
import colors from 'colors';

async function cli() {
  const confirmRes = await confirm({ message: colors.red(`执行后将会删除当前目录下的node_modules文件夹, 是否继续?`), default: true });
  if (confirmRes) {
    const dir = path.join(process.cwd(), 'node_modules');
    await fse.remove(dir);
    console.log(colors.green('删除成功'));
  }
}
cli();