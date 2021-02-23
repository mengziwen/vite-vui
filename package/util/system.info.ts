/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-12-01 09:36:42
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-12-15 14:26:21
 */
const platForm: () => PLATFORM = () => {
  const phoneMatch = /phone|iPhone|Moto|SM|Pixel/;
  const padMatch = /pad|iPod|Mobile/;

  if (navigator.userAgent.match(phoneMatch)) return 'app';

  if (navigator.userAgent.match(padMatch)) return 'pad';

  return 'web';
};

export { platForm };

export default { platForm };
