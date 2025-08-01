import type {
  RegisteredWidgetType,
  WidgetCategory,
  WidgetRegistration,
  WidgetTypeMap,
} from '@/core/model/widget-registry/type.ts';

class WidgetRegistry {
  private registry: Map<string, WidgetRegistration<any>> = new Map();
  private categoryMap: Map<WidgetCategory, string[]> = new Map();

  register<K extends RegisteredWidgetType>(
    widget: WidgetRegistration<WidgetTypeMap[K]> & { type: K }
  ) {
    if (this.registry.has(widget.type)) {
      console.warn(`元件 '${widget.type}' 已注册，将覆盖原有注册。`);
    }

    this.registry.set(widget.type, widget);

    if (!this.categoryMap.has(widget.category)) {
      this.categoryMap.set(widget.category, []);
    }
    const categoryWidgets = this.categoryMap.get(widget.category)!;
    if (!categoryWidgets.includes(widget.type)) {
      categoryWidgets.push(widget.type);
    }
  }

  unregister(type: RegisteredWidgetType) {
    const widget = this.registry.get(type);
    if (widget) {
      this.registry.delete(type);
      const categoryWidgets = this.categoryMap.get(widget.category)!;
      const index = categoryWidgets.indexOf(widget.type);
      if (index !== -1) {
        categoryWidgets?.splice(index, 1);
      }
    }
  }

  get<K extends RegisteredWidgetType>(type: K) {
    return this.registry.get(type) as WidgetRegistration<WidgetTypeMap[K]> | undefined;
  }

  getByCategory(category: WidgetCategory) {
    return (this.categoryMap.get(category) || []) as RegisteredWidgetType[];
  }
}

const widgetRegistry = new WidgetRegistry();

export default widgetRegistry;
