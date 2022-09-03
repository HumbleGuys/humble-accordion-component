<x-layout>
    <div style="padding:10rem; width: 100rem; margin:auto; max-width:100%;">
        <x-accordion::base>
            <x-accordion::header>
                My title
            </x-accordion::header>
    
            <x-accordion::panel>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi facere assumenda? Quibusdam excepturi exercitationem, ullam accusantium architecto incidunt saepe maxime veritatis nisi laborum reiciendis iste facilis nihil deleniti repellat.
            </x-accordion::panel>
        </x-accordion::base>
    
        <x-accordion::base open>
            <x-accordion::header>
                Lorem ipsum dolor
            </x-accordion::header>
    
            <x-accordion::panel>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi facere assumenda? Quibusdam excepturi exercitationem, ullam accusantium architecto incidunt saepe maxime veritatis nisi laborum reiciendis iste facilis nihil deleniti repellat.
            </x-accordion::panel>
        </x-accordion::base>
    
        <x-accordion::base style="--iconRotateWhenOpen: 0.125turn">
            <x-accordion::header>
                Test

                <x-slot name="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="accordion__icon"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </x-slot>
            </x-accordion::header>
    
            <x-accordion::panel>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum commodi facere assumenda? Quibusdam excepturi exercitationem, ullam accusantium architecto incidunt saepe maxime veritatis nisi laborum reiciendis iste facilis nihil deleniti repellat.
            </x-accordion::panel>
        </x-accordion::base>
    </div>
</x-layout>