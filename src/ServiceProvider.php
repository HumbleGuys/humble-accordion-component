<?php

namespace HumbleAccordionComponent;

use Illuminate\Support\ServiceProvider as SupportServiceProvider;

class ServiceProvider extends SupportServiceProvider
{
    public function register(): void
    {
        $this->loadViewsFrom(__DIR__.'/resources', 'accordion');
    }

    public function boot(): void
    {
    }
}
