import type React from 'react';

export type WidgetCategory = 'container' | 'form' | 'custom';

export interface WidgetTypeMap {
  /**
   * 占位符，等待声明合并
   */
  _placeholder?: never;
}

export type RegisteredWidgetType = keyof WidgetTypeMap;

export interface WidgetRegistration<P = any> {
  /**
   * 元件标识
   */
  type: string;
  /**
   * 元件分类
   */
  category: WidgetCategory;
  /**
   * 元件实现
   */
  component: React.ComponentType<P>;
  /**
   * 图标
   */
  icon: React.ComponentType<any>;
  /**
   * 默认属性
   */
  defaultProps?: Partial<P>;
  /**
   * 校验元件配置
   */
  validateConfig?: (config: P) => boolean;
  /**
   * 是否允许子元件
   */
  childrenAllowed?: boolean;
  /**
   * 允许的子组件类型
   */
  allowedChildrenTypes?: string[];
}
