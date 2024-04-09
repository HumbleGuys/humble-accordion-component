<details
    x-data="accordion"
    {{ $attributes->merge(['class' => 'accordion']) }}
    :class="{ 'isOpen': isOpen }"
>
    {!! $slot !!}
</details>

@if (config('humbleComponents.auto_include_assets', true))
    @once
        @push('head')
            <link
                rel="stylesheet"
                href="{{ asset('../vendor/humble-guys/humble-accordion-component/public/resources/dist/style.css?v=0.0.7') }}"
            >
            <script
                module
                defer
                src="{{ asset('../vendor/humble-guys/humble-accordion-component/public/resources/dist/humble-accordion-component.umd.js?v=0.0.7') }}"
            ></script>
        @endpush
    @endonce
@endif
