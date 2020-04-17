export default (assetPath) => {
    const publicUrl = assetPath.startsWith('data:image') ? '' : process.env.PUBLIC_URL;
    return publicUrl + assetPath;
  }