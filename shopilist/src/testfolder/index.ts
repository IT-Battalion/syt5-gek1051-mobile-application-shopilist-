//imports what we need to register the plugin
import { registerPlugin } from '@capacitor/core';

//builds an interface for the methods we're using
export interface DatabasePlugin
{
    initialise(): void;
    addString(options: {key: string, value: string}): void;
    obtainString(options: {key: string}): Promise<{ value: string }>;
    closeDB(): void;
}

//registers the plugin and exports it
const DatabasePlugin = registerPlugin<DatabasePlugin>('DatabasePlugin');
export default DatabasePlugin