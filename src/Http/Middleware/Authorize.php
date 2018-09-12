<?php

namespace Orlyapps\NovaAppPreview\Http\Middleware;

use Orlyapps\NovaAppPreview\NovaAppPreview;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Illuminate\Http\Response
     */
    public function handle($request, $next)
    {
        return resolve(NovaAppPreview::class)->authorize($request) ? $next($request) : abort(403);
    }
}
