import { AxiosInstance } from 'axios';
import {
  EnhanceOptions,
  enhance as originalEnhance,
  Enhancer as OriginalEnhancer,
} from 'foca-axios';

export interface Enhancer extends OriginalEnhancer {
  /**
   * @deprecated 小程序不支持patch方法
   */
  patch: never;
}

/**
 * axios增强适配器小程序版本
 * ```typescript
 * import axios from 'axios';
 * import { enhance } from 'foca-miniprogram-axios';
 *
 * const instance = axios.create(...);
 * export const http = enhance(instance);
 * http === instance // true
 * ```
 * 增强后的实例与传入的实例是同一个，只不过类型提示变了。
 */
export const enhance = (
  instance: AxiosInstance,
  options: EnhanceOptions = {},
): Enhancer => {
  // @ts-expect-error
  return originalEnhance(instance, options);
};
