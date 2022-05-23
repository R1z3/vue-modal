import { openBlock, createBlock, Teleport, createVNode, Transition, withCtx, h, createCommentVNode, renderSlot } from 'vue';
import { gsap, Elastic } from 'gsap';

function handler() {
  let zIndexes = [];

  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex =
      zIndexes.length > 0
        ? zIndexes[zIndexes.length - 1]
        : { key, value: baseZIndex };

    let newZIndex =
      lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;

    zIndexes.push({ key, value: newZIndex });

    return newZIndex;
  };

  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };

  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };

  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };

  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex(),
  };
}

var ZIndexUtils = handler();

var script = {
  name: "Modal",
  inheritAttrs: false,
  props: {
    show: Boolean,
    baseZIndex: {
      type: Number,
      default: 0,
    },
  },
  emit: ["update:show", "open", "close"],
  data() {
    return {
      containerShow: this.show,
    };
  },
  wrapper: null,
  modal: null,
  methods: {
    open() {
      this.$emit("open");
    },
    close() {
      this.$emit("update:show", false);
    },
    wrapperRef(el) {
      this.wrapper = el;
    },
    modalRef(el) {
      this.modal = el;
    },
    onModalClick(event) {
      if (this.modal === event.target) this.close();
    },
    onBeforeEnter(el) {
      gsap.set(el, {
        scale: 0,
        opacity: 0,
      });
    },
    onEnter(el, done) {
      ZIndexUtils.set(
        "modal",
        this.wrapper,
        this.baseZIndex + this.$vuety.config.zIndex.modal
      );

      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: Elastic.easeOut.config(0.3, 0.2),
        onComplete: () => [this.$emit("open"), done],
      });
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: Elastic.easeOut.config(0.3, 0.2),
        onComplete: () => [
          (this.containerShow = false),
          done,
          this.$emit("close"),
        ],
      });
    },
    onAfterLeave(el) {
      ZIndexUtils.clear(this.wrapper);
    },
    onBeforeEnterOverlay(el) {
      gsap.set(el, {
        opacity: 0,
      });
    },
    onEnterOverlay(el, done) {
      gsap.to(el, {
        opacity: 0.3,
        duration: 0.25,
        onComplete: done,
      });
    },
    onLeaveOverlay(el, done) {
      gsap.to(el, {
        opacity: 0,
        duration: 0.2,
        onComplete: done,
      });
    },
  },
  updated() {
    if (this.show) {
      this.containerShow = this.show;
    }
  },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createBlock(
      Teleport,
      {
        to: "body",
      },
      [
        $data.containerShow
          ? (openBlock(),
            createBlock(
              "div",
              {
                ref: $options.wrapperRef,
                style: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                },
              },
              [
                createVNode(
                  Transition,
                  {
                    onBeforeEnter: $options.onBeforeEnterOverlay,
                    onEnter: $options.onEnterOverlay,
                    onLeave: $options.onLeaveOverlay,
                    onAfterLeave: $options.onAfterLeave,
                    appear: "",
                  },
                  {
                    default: withCtx(() => [
                      $props.show
                        ? h("div", {
                            style: {
                              position: "fixed",
                              top: 0,
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background: "rgb(0,0,0)",
                            },
                            onClick: $options.close,
                          })
                        : createCommentVNode("", true),
                    ]),
                  }
                ),
                createVNode(
                  Transition,
                  {
                    onBeforeEnter: $options.onBeforeEnter,
                    onEnter: $options.onEnter,
                    onLeave: $options.onLeave,
                    appear: "",
                  },
                  {
                    default: withCtx(() => [
                      $props.show
                        ? h(
                            "div",
                            {
                              style: {
                                width: "100vw",
                                height: "100vh",
                                display: "flex",
                              },
                              ref: $options.modalRef,
                              onClick:
                                _cache[1] ||
                                (_cache[1] = (...args) =>
                                  $options.onModalClick &&
                                  $options.onModalClick(...args)),
                            },
                            [renderSlot(_ctx.$slots, "default")]
                          )
                        : createCommentVNode("", true),
                    ]),
                  }
                ),
              ]
            ))
          : createCommentVNode("", true),
      ]
    )
  );
}

script.render = render;

export { script as default };
