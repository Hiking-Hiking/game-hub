/**
 * 裁剪图片大小的工具函数
 * @param url 图片的url地址
 * @returns 修改过的url插入了crop参数的url
 * 这里有个疑问是 “裁剪的图片尺寸是固定”的问题？
 * 问题描述：
 *        我们裁剪图片尺寸的方法里，设置了固定的宽高600 * 400，这样得到的图像宽度是600 素宽，但在不同的布局里，比如侧边栏里，宽度是600px但只需要在32px的容器中显示，为什么不直接动态裁剪图片，或者在获取图片时就根据需要获取对应的尺寸呢？如果我们给这个函数两个参数，宽度和高度，并动态裁剪图像，岂不是更好？
 * 问题解答：
 *        理论上可以、但我们做个这个demo的rawg官网的后端不支持该功能，因此我们在裁剪图片尺寸的方法里，无法传递任何随机的值，而是写了固定的 600 * 400。某些图片的尺寸支持裁剪，但做demo的mosh老师并不完全清楚，不知道这些尺寸是多少。
 */
const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  //因为RAWG的api支持这种方式裁剪图片，所以这样对URL裁剪拼接，将crop参数插入进去，获得修改了大小的url；
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;
