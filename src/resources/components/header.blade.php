<summary {{ $attributes->merge(['class' => 'accordion__header']) }}>
    {!! $slot !!}

    @if (!empty($icon))
        {!! $icon !!}
    @else
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="accordion__icon"><polyline points="6 9 12 15 18 9"></polyline></svg>
    @endif
</summary>