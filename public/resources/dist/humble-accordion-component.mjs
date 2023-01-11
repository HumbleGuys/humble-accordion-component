const n = () => ({
  summaryEl: null,
  contentEl: null,
  isOpen: !1,
  animation: null,
  isClosing: !1,
  isExpanding: !1,
  duration: 350,
  init() {
    this.summaryEl = this.$el.querySelector(".accordion__header"), this.contentEl = this.$el.querySelector(".accordion__panel"), this.$el.open && (this.isOpen = !0), this.summaryEl.addEventListener("click", (i) => this.onClick(i));
  },
  onClick(i) {
    i.preventDefault(), this.$el.style.overflow = "hidden", this.isClosing || !this.$el.open ? this.open() : (this.isExpanding || this.$el.open) && this.shrink();
  },
  shrink() {
    this.isOpen = !1, this.isClosing = !0;
    const i = `${this.$el.offsetHeight}px`, t = `${this.summaryEl.offsetHeight}px`;
    this.animation && this.animation.cancel(), this.animation = this.$el.animate(
      {
        height: [i, t]
      },
      {
        duration: this.duration,
        easing: "linear"
      }
    ), this.animation.onfinish = () => this.onAnimationFinish(!1), this.animation.oncancel = () => this.isClosing = !1;
  },
  open() {
    this.$el.style.height = `${this.$el.offsetHeight}px`, this.$el.open = !0, window.requestAnimationFrame(
      () => window.requestAnimationFrame(() => this.expand())
    );
  },
  expand() {
    this.isOpen = !0, this.isExpanding = !0;
    const i = `${this.$el.offsetHeight}px`, t = `${this.summaryEl.offsetHeight + this.contentEl.offsetHeight}px`;
    this.animation && this.animation.cancel(), this.animation = this.$el.animate(
      {
        height: [i, t]
      },
      {
        duration: this.duration,
        easing: "linear"
      }
    ), this.animation.onfinish = () => window.requestAnimationFrame(() => this.onAnimationFinish(!0)), this.animation.oncancel = () => this.isExpanding = !1;
  },
  onAnimationFinish(i) {
    this.$el.open = i, this.isOpen = i, this.animation = null, this.isClosing = !1, this.isExpanding = !1, this.$el.style.height = "", this.$el.style.overflow = "";
  }
});
document.addEventListener("alpine:init", () => {
  window.Alpine.data("accordion", n);
});
