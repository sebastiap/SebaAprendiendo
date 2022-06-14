extends KinematicBody2D


# Declare member variables here. Examples:
# var a = 2
# var b = "text"
var velocity : Vector2 = Vector2.ZERO
var move_speed = 100
export (float) var gravity : float = 400
export (float) var jump_speed : float = 250
# Called when the node enters the scene tree for the first time.
func _ready():
	print("good morning world") # Replace with function body.
		
# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

func _physics_process(delta):
	var movement_direction = Vector2.ZERO
	
	if Input.is_action_pressed("move_right"):
		movement_direction = Vector2.RIGHT
		$PlayerSprite.flip_h = false
	if Input.is_action_pressed("move_left"):
		movement_direction = Vector2.LEFT
		$PlayerSprite.flip_h = true
	if Input.is_action_pressed("jump") && is_on_floor():
		velocity.y -=  jump_speed
		
	if is_on_floor():
		if movement_direction != Vector2.ZERO:
			$PlayerSprite.play("walk")
		else:
			$PlayerSprite.play("idle")
	else:
		$PlayerSprite.play("jump")

	velocity.x = movement_direction.x * move_speed
	velocity.y = velocity.y  + gravity * delta

	velocity = move_and_slide(velocity,Vector2.UP )
		



