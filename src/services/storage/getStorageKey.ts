import { AsyncStorageKey, StorageConfig } from 'types/Storage';

const getStorageKey = ({ uid, key }: StorageConfig) => `${uid}:${key}`;

export default getStorageKey;
