<details 
    x-data="accordion"
    {{ $attributes->merge(['class' => 'accordion']) }}
    :class="{ 'isOpen': isOpen }"
>
    {!! $slot !!}
</details>

@once
    @push('head')
        <link rel="stylesheet" href="{{ asset('../vendor/humble-guys/humble-accordion-component/public/resources/dist/assets/index.6040a53c.css') }}">
        <script module defer src="{{ asset('../vendor/humble-guys/humble-accordion-component/public/resources/dist/assets/index.3f29f0f1.js') }}"></script>
    @endpush   
@endonce 