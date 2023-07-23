export enum AsyncStorageKey {
  favourites = '@favourites',
  profilePicture = '@profilePicture',
}

export type StorageConfig = {
  uid: string;
  key: AsyncStorageKey;
};
