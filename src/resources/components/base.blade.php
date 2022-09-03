<details 
    x-data="accordion"
    {{ $attributes->merge(['class' => 'accordion']) }}    
>
    {!! $slot !!}
</details>