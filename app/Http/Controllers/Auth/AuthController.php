<?php namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use App\Events\PopulateUserContentOptions;
use App\User;
use Illuminate\Support\Facades\Event;
use Validator;

class AuthController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Registration & Login Controller
	|--------------------------------------------------------------------------
	|
	| This controller handles the registration of new users, as well as the
	| authentication of existing users. By default, this controller uses
	| a simple trait to add these behaviors. Why don't you explore it?
	|
	*/

	use AuthenticatesAndRegistersUsers;
	protected $redirectTo = "/admin/home";

	/**
	 * Create a new authentication controller instance.
	 *
	 * @internal param Guard $auth
	 * @internal param Registrar $registrar
	 */
	public function __construct()
	{
		$this->middleware('guest', ['except' => 'getLogout']);
	}

	/**
	 * Get a validator for an incoming registration request.
	 *
	 * @param  array  $data
	 * @return \Illuminate\Contracts\Validation\Validator
	 */
	public function validator(array $data)
	{
		return Validator::make($data, [
				'username' => 'required|max:255|unique:users',
				'email' => 'required|email|max:255|unique:users',
				'password' => 'required|confirmed|min:6',
		]);
	}

	/**
	 * Create a new user instance after a valid registration.
	 *
	 * @param  array  $data
	 * @return User
	 */
	public function create(array $data)
	{
		$user = User::create([
				'username' => $data['username'],
				'email' => $data['email'],
				'password' => bcrypt($data['password']),
			//subscriber user
				'usertype_id' => 2
		]);
		//register web page default options and profile
		Event::fire(new PopulateUserContentOptions($user->id));
		return $user;
	}

}
