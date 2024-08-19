/**
 * 裁剪图片大小的工具函数
 * @param url 图片的url地址
 * @returns 修改过的url插入了crop参数的url
 */
const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  //因为RAWG的api支持这种方式裁剪图片，所以这样对URL裁剪拼接，将crop参数插入进去，获得修改了大小的url；
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;
