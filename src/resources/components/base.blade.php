<details 
    x-data="accordion"
    {{ $attributes->merge(['class' => 'accordion']) }}
    :class="{ 'isOpen': isOpen }"
>
    {!! $slot !!}
</details>

@once
    @push('head')
        <link rel="stylesheet" href="{{ asset('../vendor/humble-guys/humble-accordion-component/public/resources/dist/style.css?v=0.0.6') }}">
        <script module defer src="{{ asset('../vendor/humble-guys/humble-accordion-component/public/resources/dist/humble-accordion-component.umd.js?v=0.0.6') }}"></script>
    @endpush   
@endonce 