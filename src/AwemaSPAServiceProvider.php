<?php

namespace AwemaPL\AwemaSPA;

use AwemaPL\BaseJS\AwemaProvider;

class AwemaSPAServiceProvider extends AwemaProvider
{
    public function boot()
    {
        parent::boot();
    }

    public function getPackageName(): string
    {
        return 'awema-spa';
    }

    public function getPath(): string
    {
        return __DIR__;
    }
}
