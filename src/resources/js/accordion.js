const accordion = () => ({
    summaryEl: null,
    contentEl: null,
    isOpen: false,
    animation: null,
    isClosing: false,
    isExpanding: false,
    duration: 350,

    init() {
        this.summaryEl = this.$el.querySelector(".accordion__header");
        this.contentEl = this.$el.querySelector(".accordion__panel");

        if (this.$el.open) {
            this.isOpen = true;
        }

        this.summaryEl.addEventListener("click", (e) => this.onClick(e));
    },

    onClick(e) {
        // Stop default behaviour from the browser
        e.preventDefault();
        // Add an overflow on the <details> to avoid content overflowing
        this.$el.style.overflow = "hidden";
        // Check if the element is being closed or is already closed
        if (this.isClosing || !this.$el.open) {
            this.open();
            // Check if the element is being openned or is already open
        } else if (this.isExpanding || this.$el.open) {
            this.shrink();
        }
    },

    shrink() {
        // Set the element as "being closed"
        this.isOpen = false;
        this.isClosing = true;

        // Store the current height of the element
        const startHeight = `${this.$el.offsetHeight}px`;
        // Calculate the height of the summary
        const endHeight = `${this.summaryEl.offsetHeight}px`;

        // If there is already an animation running
        if (this.animation) {
            // Cancel the current animation
            this.animation.cancel();
        }

        // Start a WAAPI animation
        this.animation = this.$el.animate(
            {
                // Set the keyframes from the startHeight to endHeight
                height: [startHeight, endHeight],
            },
            {
                duration: this.duration,
                easing: "linear",
            }
        );

        // When the animation is complete, call onAnimationFinish()
        this.animation.onfinish = () => this.onAnimationFinish(false);
        // If the animation is cancelled, isClosing variable is set to false
        this.animation.oncancel = () => (this.isClosing = false);
    },

    open() {
        this.$el.style.height = `${this.$el.offsetHeight}px`;

        // Force the [open] attribute on the details element
        this.$el.open = true;
        // Wait for the next frame to call the expand function
        window.requestAnimationFrame(() =>
            window.requestAnimationFrame(() => this.expand())
        );
    },

    expand() {
        // Set the element as "being expanding"
        this.isOpen = true;
        this.isExpanding = true;
        // Get the current fixed height of the element
        const startHeight = `${this.$el.offsetHeight}px`;
        // Calculate the open height of the element (summary height + content height)
        const endHeight = `${
            this.summaryEl.offsetHeight + this.contentEl.offsetHeight
        }px`;

        // If there is already an animation running
        if (this.animation) {
            // Cancel the current animation
            this.animation.cancel();
        }

        // Start a WAAPI animation
        this.animation = this.$el.animate(
            {
                // Set the keyframes from the startHeight to endHeight
                height: [startHeight, endHeight],
            },
            {
                duration: this.duration,
                easing: "linear",
            }
        );
        // When the animation is complete, call onAnimationFinish()
        this.animation.onfinish = () =>
            window.requestAnimationFrame(() => this.onAnimationFinish(true));
        // If the animation is cancelled, isExpanding variable is set to false
        this.animation.oncancel = () => (this.isExpanding = false);
    },

    onAnimationFinish(open) {
        // Set the open attribute based on the parameter
        this.$el.open = open;
        this.isOpen = open;
        // Clear the stored animation
        this.animation = null;
        // Reset isClosing & isExpanding
        this.isClosing = false;
        this.isExpanding = false;
        // Remove the overflow hidden and the fixed height
        this.$el.style.height = "";
        this.$el.style.overflow = "";
    },
});

document.addEventListener("alpine:init", () => {
    window.Alpine.data("accordion", accordion);
});
