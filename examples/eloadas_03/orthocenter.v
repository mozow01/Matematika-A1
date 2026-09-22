Lemma dot_sum_difference : forall u v : Vec3,
  dot (vadd u v) (vsub u v) = dot u u - dot v v.
Proof.
  intros [ux uy uz] [vx' vy' vz'].
  unfold dot, vadd, vsub.
  simpl.
  ring.
Qed.

Theorem equal_radii_give_altitude_direction : forall b c : Vec3,
  dot b b = dot c c ->
  dot (vadd b c) (vsub b c) = 0.
Proof.
  intros b c Hequal.
  rewrite dot_sum_difference.
  rewrite Hequal.
  ring.
Qed.

Theorem orthocenter_at_parameter_one : forall a b c : Vec3,
  vadd a (vadd b c) = vadd b (vadd a c) /\
  vadd a (vadd b c) = vadd c (vadd a b).
Proof.
  intros [ax ay az] [bx b_y bz] [cx cy cz].
  split.
  - apply vec3_extensionality; simpl; ring.
  - apply vec3_extensionality; simpl; ring.
Qed.

Print Assumptions equal_radii_give_altitude_direction.
Print Assumptions orthocenter_at_parameter_one.
