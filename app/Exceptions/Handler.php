<?php

namespace App\Exceptions;
use Throwable;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenBlacklistedException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;



class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function render($request, Throwable $exception)
    {
        
        if($exception instanceof TokenBlacklistedException)
        {
            return response(['error'=>"Token has been expired"], 500);
        }
        else if($exception instanceof TokenInvalidException)
        {
            return response(['error'=>"Token is invalid"], 500);
        }
        else if($exception instanceof TokenExpiredException)
        {
            return response(['error'=>"Token has been expired"], 500);
        }
        else if($exception instanceof JWTException)
        {
            return response(['error'=>"Token is not provided"], 500);
        }

        return parent::render($request, $exception);
    }
}
