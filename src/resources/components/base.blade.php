<details 
    x-data="accordion"
    {{ $attributes->merge(['class' => 'accordion']) }}
    :class="{ 'isOpen': isOpen }"
>
    {!! $slot !!}
</details>