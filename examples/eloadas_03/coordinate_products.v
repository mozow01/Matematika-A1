Theorem dot_product_coordinates : forall a b : Vec3,
  dot a b = vx a * vx b + vy a * vy b + vz a * vz b.
Proof.
  reflexivity.
Qed.

Theorem cross_product_coordinates : forall a b : Vec3,
  vx (cross a b) = vy a * vz b - vz a * vy b /\
  vy (cross a b) = vz a * vx b - vx a * vz b /\
  vz (cross a b) = vx a * vy b - vy a * vx b.
Proof.
  intros a b.
  repeat split; reflexivity.
Qed.

Theorem cross_product_is_orthogonal : forall a b : Vec3,
  dot (cross a b) a = 0 /\ dot (cross a b) b = 0.
Proof.
  intros [ax ay az] [bx b_y bz].
  unfold dot, cross.
  simpl.
  split; ring.
Qed.

Theorem standard_basis_cross_table :
  cross i j = k /\ cross j k = i /\ cross k i = j.
Proof.
  split.
  - apply vec3_extensionality; simpl; ring.
  - split; apply vec3_extensionality; simpl; ring.
Qed.

Print Assumptions dot_product_coordinates.
Print Assumptions cross_product_coordinates.
Print Assumptions cross_product_is_orthogonal.
