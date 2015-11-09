<?php namespace App\Listeners\Events;

use App\Events\EmailHandler;

use App\Events\SendEmail;
//use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;

class SendEmailHandler implements ShouldBeQueued {

	//use InteractsWithQueue;

	/**
	 * Create the event handler.
	 *
	 */
	public function __construct()
	{
		//
	}

    /**
     * Handle the event.
     *
     * @param EmailHandler|SendEmail $event
     */
	public function handle(SendEmail $event)
	{   //dd($event);
		//sent through Services\Mailer Interface
        $event->mailer->send();
	}

}
